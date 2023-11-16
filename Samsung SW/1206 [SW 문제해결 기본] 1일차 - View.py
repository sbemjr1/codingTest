T = int(input())

for tc in range(1, T+1):
    w = int(input())
    h = list(map(int, input().split()))
    ans = 0
    
    for i in range(2,w-2):
        if (h[i] > h[i-1] and h[i] > h[i+1]) and (h[i] > h[i-2] and h[i] > h[i+2]) :
            max_height = max(h[i-2], h[i-1], h[i+1], h[i+2])
            ans += h[i] - max_height
    print(f"#{tc}", ans)
        
