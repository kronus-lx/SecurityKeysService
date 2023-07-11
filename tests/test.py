from requests import *
from pytest import *

class SSHKeyAPITest:
    def __init__(self, url, port, endpoint):
        pass
    def getRequestApi(self):
        pass
    def postRequestApi(self):
        pass

# Service API Test 1 
def getAllKeys() -> int:
    return 0

# Service API Test 2
def getSpecificKey(hostname) -> int:
    return 0

# Service API Test 3
def createNewKey(hostname) -> int:
    return 0

# Service API Test 4
def deleteKey(hostname) -> int:
    return 0

if __name__ == '__main__':
    assert getAllKeys() == 0
    assert getSpecificKey('') == 0
    assert createNewKey('') == 0
    assert deleteKey('') == 0
else:
    exit()