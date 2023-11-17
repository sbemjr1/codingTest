T = int(input())
    
for tc in range(1, T+1):
    n = int(input())
    h = list(map(int, input().split()))
    dump = 0

    while dump != n :
        h[h.index(max(h))]-=1
        h[h.index(min(h))]+=1
        dump+=1

    print(f"#{tc}", max(h) - min(h))
