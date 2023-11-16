T = int(input())

for tc in range(1, T+1):
    n,m = map(int, input().split())
    arr = []
    _max = 0

    for i in range(n) :
        arr.append(list(map(int, input().split())))
    
    for i in range(n-m+1) :
        for j in range(n-m+1) :
            _add = 0
            for k in range(i,i+m) :
                for l in range(j,j+m) :
                    _add+=(arr[k][l])
            if _max < _add :
                _max = _add

    print(_max)
