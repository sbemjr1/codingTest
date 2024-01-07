n = int(input())

for tc in range(1,1+n):
    a,b = map(int, input().split())
    arr_a = list(map(int, input().split()))
    arr_b = list(map(int, input().split()))
    answer = 0

    if a < b:
        _plus = 0
        for i in range(b-a+1):
            result = 0
            for j in range(a):
                result += (arr_a[j] * arr_b[j+_plus])
            _plus += 1
            if result >= answer:
                answer = result
    elif a > b:
        _plus = 0
        for i in range(a-b+1):
            result = 0
            for j in range(b):
                result += (arr_a[j+_plus] * arr_b[j])
            _plus += 1
            if result >= answer:
                answer = result
    elif a == b:
        result = 0
        for i in range(a):
            result += (arr_a[i] * arr_b[i])

        if result >= answer:
            answer = result

    print(f'#{tc}',answer)