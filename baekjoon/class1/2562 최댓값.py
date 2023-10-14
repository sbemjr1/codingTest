t=0
idx = 0

for i in range(9) :
    n = int(input())
    if t < n :
        t=n
        idx=i+1
print(t)
print(idx)