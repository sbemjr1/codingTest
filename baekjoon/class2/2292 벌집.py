n = int(input())

nums = 1  # 벌집의 개수, 1개부터 시작
cnt = 1

while n > nums :
    nums += 6*cnt
    cnt+=1
print(cnt)