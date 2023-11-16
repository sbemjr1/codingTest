T = int(input())

for tc in range(1, T+1):

    N = int(input())
    price = list(map(int, input().split()))
    dp = [0] * N

    max_price = price[-1]
    for i in range(N-2, -1, -1):
        if max_price > price[i]:
            dp[i+1] = max_price - price[i]
        else:
            max_price = price[i]
    print(dp)
    print(f"#{tc}", sum(dp))