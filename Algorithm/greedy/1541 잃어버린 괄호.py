import sys
input = sys.stdin.readline

s = input().rstrip()

arr = s.split("-")

for i in range(len(arr)) :
    arr[i] = arr[i].split("+")

for i in range(len(arr)) :
    for j in range(len(arr[i])) :
        arr[i][j] = int(arr[i][j])

for i in range(len(arr)) :
    arr[i] = sum(arr[i])

result = arr[0]

for i in range(1,len(arr)) :
    result -= arr[i]

print(result)