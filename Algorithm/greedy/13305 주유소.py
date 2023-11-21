# import sys
# input = sys.stdin.readline

# n = int(input().rstrip())
# distance = list(map(int, input().rstrip().split()))
# cost = list(map(int, input().rstrip().split()))
# cost = cost[:len(cost) -1]
# result = 0
# ans = 0

# for i in range(len(cost)) :
#     if ans == sum(distance) :
#         break
#     if cost[i] == min(cost) :
#         result += (sum(distance[i:]) * cost[i])
#         ans += sum(distance[i:])
#     else :
#         result += (distance[i] * cost[i])
#         ans += distance[i]
    

# print(result) => 17점

import sys
input = sys.stdin.readline

size = int(input())
length = list(map(int, input().split()))
oil_price= list(map(int, input().split()))
min_price = oil_price[0]
result = 0

for i in range(size-1):
    min_price = min(min_price, oil_price[i])
    result += min_price * length[i]
print(result)