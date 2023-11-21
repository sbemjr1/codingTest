import sys
input = sys.stdin.readline

n, price = map(int, input().rstrip().split())
coins = []
result = 0

for _ in range(n) :
    coins.append(int(input().rstrip()))

coins.sort(reverse=True)

for i in coins :
    if price // i >= 1 :
        result += price // i
        price %= i

print(result)