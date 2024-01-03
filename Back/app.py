from flask import Flask
from transformers import pipeline  # Pipeline
import requests
import xml.etree.ElementTree as ET

summarizer = pipeline('summarization', model='models/Bart-summarizer')

app = Flask(__name__)

key = "wd346uuddnfjcfd9uvtrp8a8"


def get_paragraphs_from_api(doc_id):
    try:
        api_url = "https://ieeexploreapi.ieee.org/api/v1/search/document/" + doc_id + "/fulltext?apikey=" + key + "&format=xml"
        # Make a GET request to the API
        response = requests.get(api_url)
        response.raise_for_status()  # Raise an exception for bad responses

        # Parse the XML content
        root = ET.fromstring(response.content)

        # Find all <p> elements and extract their text
        paragraphs = [p.text.strip() for p in root.findall('.//p')]

        return paragraphs, response.content

    except requests.exceptions.RequestException as e:
        # Handle request errors
        print(f"Error: {e}")
        return None, None
    except ET.ParseError as e:
        # Handle XML parsing errors
        print(f"XML Parsing Error: {e}")
        return None, None


def replace_paragraphs_in_xml(original_xml, new_paragraphs):
    try:
        # Parse the original XML content
        root = ET.fromstring(original_xml)

        # Find all <p> elements and replace their text with new paragraphs
        for p, new_text in zip(root.findall('.//p'), new_paragraphs):
            p.text = new_text

        # Serialize the modified XML back to a string
        modified_xml = ET.tostring(root, encoding='utf-8').decode('utf-8')

        return modified_xml

    except ET.ParseError as e:
        # Handle XML parsing errors
        print(f"XML Parsing Error: {e}")
        return None

@app.route('/summarize/<doc_id>')
def summarize(doc_id):  # put application's code here
    paragraphs, old_xml = get_paragraphs_from_api(doc_id)
    summary = []

    for text in paragraphs:
        if len(text.split()) < 100:
            summary.append(text)
        else:
            summary.append(summarizer(text)[0]["summary_text"])

    new_xml = replace_paragraphs_in_xml(old_xml, summary)

    return new_xml


if __name__ == '__main__':
    app.run()
