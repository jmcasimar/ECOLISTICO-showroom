import paho.mqtt.client as mqtt
import paho.mqtt.publish as publish

publish.single('15-113-001/Server', 'Hello', hostname='192.168.1.100')
