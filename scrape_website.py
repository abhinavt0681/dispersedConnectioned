import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin

# URLs to scrape
urls = [
    "https://dispersedconnection.com/",
    "https://dispersedconnection.com/melanoma_detection/",
    "https://dispersedconnection.com/sleep_cycle_prediction/"
]

# Directory to save the content
save_dir = "scrapped"
os.makedirs(save_dir, exist_ok=True)

def scrape_and_save(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract and save text content
    text_content = soup.get_text()
    file_name = os.path.join(save_dir, url.split('/')[-2] + ".txt")
    with open(file_name, 'w', encoding='utf-8') as file:
        file.write(text_content)

    # Extract and save images
    images = soup.find_all('img')
    for img in images:
        img_url = img.get('src')
        if img_url:
            # Construct full URL for the image
            full_img_url = urljoin(url, img_url)
            img_data = requests.get(full_img_url).content
            img_name = os.path.join(save_dir, os.path.basename(img_url))
            with open(img_name, 'wb') as img_file:
                img_file.write(img_data)

for url in urls:
    scrape_and_save(url)

print("Scraping completed and content saved in the 'scrapped' folder.")