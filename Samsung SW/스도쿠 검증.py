k = int(input())

for tc in range(k):
    arr = []
    answer = 1
    for i in range(9):
        arr.append(list(map(int, input().split())))

    for i in range(9):
        for j in range(9):
            for k in range(9):
                if arr[i][j] == arr[i][k] and j != k:
                    answer = 0
                    break
                if arr[i][j] == arr[k][j] and i != k:
                    answer = 0
                    break
            if i < 3 and j < 3:
                for l in range(3):
                    for m in range(3):
                        if arr[i][j] == arr[l][m] and i != l and j != m:
                            answer = 0
                            break
            elif 3 <= i < 6 and j < 3:
                for l in range(3,6):
                    for m in range(3):
                        if arr[i][j] == arr[l][m] and i != l and j != m:
                            answer = 0
                            break
            elif i >= 6 and j < 3:
                for l in range(6,9):
                    for m in range(3):
                        if arr[i][j] == arr[l][m] and i != l and j != m:
                            answer = 0
                            break
            elif i < 3 and 3 <= j < 6:
                for l in range(3):
                    for m in range(3,6):
                        if arr[i][j] == arr[l][m] and i != l and j != m:
                            answer = 0
                            break
            elif i < 3 and 6 <= j:
                for l in range(3):
                    for m in range(6,9):
                        if arr[i][j] == arr[l][m] and i != l and j != m:
                            answer = 0
                            break
            elif 3 <= i < 6 and 3 <= j < 6:
                for l in range(3,6):
                    for m in range(3,6):
                        if arr[i][j] == arr[l][m] and i != l and j != m:
                            answer = 0
                            break
            elif 3 <= i < 6 and j >= 6:
                for l in range(3,6):
                    for m in range(6,9):
                        if arr[i][j] == arr[l][m] and i != l and j != m:
                            answer = 0
                            break
            elif i >= 6 and 3 <= j < 6:
                for l in range(6,9):
                    for m in range(3,6):
                        if arr[i][j] == arr[l][m] and i != l and j != m:
                            answer = 0
                            break
            elif i >= 6 and j >= 6:
                for l in range(6,9):
                    for m in range(6,9):
                        if arr[i][j] == arr[l][m] and i != l and j != m:
                            answer = 0
                            break

    print(answer)