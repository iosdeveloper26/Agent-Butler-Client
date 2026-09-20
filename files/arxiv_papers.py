#!/usr/bin/env python3
"""Fetch recent arXiv papers from the cs.LG (Machine Learning) category.

The script queries the public arXiv API, parses the Atom XML response,
and prints a brief summary for each paper: title, authors, and the link to the abstract.
It includes basic error handling and a 10‑second delay before execution as requested.
"""

import time
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET

# Constants
ARXIV_API_URL = "https://export.arxiv.org/api/query?search_query=cat:cs.LG&start=0&max_results=20"
DELAY_SECONDS = 10


def fetch_arxiv(url: str) -> str:
    """Download the Atom feed from arXiv.

    Args:
        url: The full API query URL.
    Returns:
        The raw XML response as a string.
    """
    try:
        with urllib.request.urlopen(url) as response:
            return response.read().decode('utf-8')
    except urllib.error.URLError as e:
        raise RuntimeError(f"Failed to fetch data from arXiv: {e}")


def parse_arxiv(xml_data: str):
    """Parse the Atom XML and yield paper info.

    Yields:
        dict with keys: title, authors, link
    """
    ns = {'atom': 'http://www.w3.org/2005/Atom'}
    root = ET.fromstring(xml_data)
    for entry in root.findall('atom:entry', ns):
        title = entry.find('atom:title', ns).text.strip().replace('\n', ' ')
        author_elems = entry.findall('atom:author/atom:name', ns)
        authors = ', '.join(a.text.strip() for a in author_elems)
        link = ''
        for l in entry.findall('atom:link', ns):
            if l.attrib.get('type') == 'text/html' and l.attrib.get('rel') == 'alternate':
                link = l.attrib.get('href')
                break
        yield {'title': title, 'authors': authors, 'link': link}


def main():
    # Optional delay before execution as per schedule requirement
    time.sleep(DELAY_SECONDS)
    try:
        xml_data = fetch_arxiv(ARXIV_API_URL)
    except RuntimeError as e:
        print(e)
        return
    for paper in parse_arxiv(xml_data):
        print(f"Title: {paper['title']}")
        print(f"Authors: {paper['authors']}")
        print(f"Link: {paper['link']}")
        print('-' * 80)

if __name__ == "__main__":
    main()