T = int(input())
    
for tc in range(1, T+1):
    n,m = map(int, input().split())
    arr = []
    _maxArr = []

    for i in range(n) :
        arr.append(list(map(int, input().split())))
    
    for i in range(n-m+1) :
        for j in range(n-m+1) :
            _max = 0
            for k in range(m) :
                for l in range(m) :
                    _max+=arr[i+k][j+l]
            _maxArr.append(_max)
    
    print(f"#{tc}", max(_maxArr))