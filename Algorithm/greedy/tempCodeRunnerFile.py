import sys
input = sys.stdin.readline

n = int(input().rstrip())
distance = list(map(int, input().rstrip().split()))
cost = list(map(int, input().rstrip().split()))
result = 0
ans = 0

for i in range(len(cost)) :
    if ans == sum(distance) :
        break
    if cost[i] == min(cost[i:len(cost) - 1]) :
        result += (sum(distance[i:]) * cost[i])
        ans += sum(distance[i:])
    else :
        result += (distance[i] * cost[i])
        ans += distance[i]
    

print(result)