d=[]

while True :
    w = list(map(int, input().split()))
    w.sort()
    if w.count(0) == 0 :
        d.append(w)
    else :
        break

for i in range(len(d)) :
    if d[i][2] ** 2 == d[i][1] ** 2 + d[i][0] ** 2 :
        print("right")
    else :
        print("wrong")

