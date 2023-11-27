import sys
input = sys.stdin.readline

# def my_round(val):
#   if val - int(val) >= 0.5:
#     return int(val)+1
#   else:
#     return int(val)

n = int(input())
arr = []
div = 0

if n == 0:
    print(0)
    exit()

for _ in range(n) :
    arr.append(int(input()))

div = int((n * 0.15) + 0.5)
arr.sort()

if div > 0:
    print(int((sum(arr[div:-div]) / len(arr[div:-div])) + 0.5))
else:
    print(int((sum(arr)/len(arr)) + 0.5))
