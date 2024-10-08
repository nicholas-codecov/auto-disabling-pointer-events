import json
import random
import string

def generate_random_string(length):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

def generate_data(n):
    data = []
    for i in range(n):
        item = {
            "id": i + 1,
            "name": f"Item {i + 1}",
            "value": random.randint(1, 1000),
            "description": generate_random_string(20)
        }
        data.append(item)
    return data

def main():
    n = int(input("Enter the number of items to generate: "))
    data = generate_data(n)
    
    with open("LargeData.json", "w") as f:
        json.dump(data, f, indent=2)
    
    print(f"{n} items have been generated and saved to LargeData.json")

if __name__ == "__main__":
    main()