n=int(input())
nums=list(map(int, input().split()))
s=0

for num in nums :
    c=0
    if num > 1:
        for j in range(2, num) :
            if num % j == 0 :
                c+=1
        if c == 0 :
            s+=1

print(s)