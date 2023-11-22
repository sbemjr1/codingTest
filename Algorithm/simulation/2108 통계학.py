import sys
input = sys.stdin.readline

n = int(input())
arr = []

for _ in range(n) :
    arr.append(int(input().rstrip()))

arr.sort()
mean = 0
all_sum = 0
arr_map = {}
for i in arr :
    all_sum += i
    if i not in arr_map :
        arr_map[i] = 1
        continue
    arr_map[i] += 1
print(arr_map.items())

mean = round(all_sum / n)
middle = arr[n // 2]

mode = 0
max_value = max(arr_map.values())
modes = []
for key, value in arr_map.items() :
    if value == max_value :
        modes.append(key)

modes.sort()
if (len(modes)) > 1 :
    mode = modes[1]
else :
    mode = modes[0]

_range = arr[n-1] - arr[0]

print(mean)
print(middle)
print(mode)
print(_range)