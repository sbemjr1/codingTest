# 주유소 복습

# import sys
# input = sys.stdin.readline

# n = int(input())
# distance = list(map(int, input().split()))
# cost = list(map(int, input().split()))

# result = 0
# min_cost = cost[0]

# for i in range(len(cost) - 1) :
#     min_cost = min(cost[i], min_cost)
#     result += min_cost * distance[i]

# print(result)

# 회의실 배정 복습
import sys
input = sys.stdin.readline

n = int(input())
time = [[0] * 2 for _ in range(n)]

for i in range(n) :
    s, e = map(int, input().split())
    time[i][0] = s
    time[i][1] = e

time.sort(key = lambda x: (x[1], x[0]))

_count = 1
end_time = time[0][1]

for i in range(1,n) :
    if end_time <= time[i][0] :
        _count+=1
        end_time = time[i][1]
print(_count)
