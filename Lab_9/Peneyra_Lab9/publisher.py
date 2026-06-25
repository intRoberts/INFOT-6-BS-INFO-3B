import paho.mqtt.client as mqtt
import json
import time

client = mqtt.Client()
client.connect("broker.hivemq.com", 1883, 60)

topic = "warehouse/sensor/clice/temp"

# Sample messages
messages = [
    {"device_id": "sensor1", "timestamp": time.time(), "value": 21, "unit": "C"},
    {"device_id": "sensor1", "timestamp": time.time(), "value": 22, "unit": "C"},
    {"device_id": "sensor1", "timestamp": time.time(), "value": 23, "unit": "C"},
    {"device_id": "sensor1", "timestamp": time.time(), "value": 24, "unit": "C"},
    {"device_id": "sensor1", "timestamp": time.time(), "value": 25, "unit": "C"},
    {"device_id": "sensor1", "timestamp": time.time(), "value": 26, "unit": "C"},
    {"device_id": "sensor1", "timestamp": time.time(), "value": 27, "unit": "C"},
    {"device_id": "sensor1", "timestamp": time.time(), "value": 28, "unit": "C"},
    {"device_id": "sensor1", "timestamp": time.time(), "value": 29, "unit": "C"},
    {"device_id": "sensor1", "timestamp": time.time(), "value": 30, "unit": "C"},
]

for msg in messages:
    payload = json.dumps(msg)
    client.publish(topic, payload)
    print(f"Published: {payload}")
    time.sleep(1)  # Delay between publishes

client.disconnect()