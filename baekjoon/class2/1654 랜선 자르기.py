import sys
input = sys.stdin.readline

k, n = map(int, input().split())
arr = []
divider = 0
result = 0

for _ in range(k):
    arr.append(int(input()))

divider = max(arr)

while result != n:
    result = 0
    for i in range(len(arr)):
        result += arr[i] // divider
    divider = divider // 2

print(int(divider * 2))