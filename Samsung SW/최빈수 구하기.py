T = int(input())

for tc in range(T):
    k = int(input())
    arr = list(map(int, input().split()))
    _count = 0
    answer = 0

    for i in range(101):
        if arr.count(i) >= _count:
            _count = arr.count(i)
            answer = i

    print(f'#{tc}',answer)

