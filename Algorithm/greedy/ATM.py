import sys
input = sys.stdin.readline

n = int(input().rstrip())
arr = list(map(int, input().rstrip().split()))
_sum = 0
result = []

arr.sort()

for num in arr :
    _sum += num
    result.append(_sum)

print(sum(result))

# A A+B A+B+C A+B+C+D A+B+C+D+E