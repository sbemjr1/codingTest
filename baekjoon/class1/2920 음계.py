l = list(map(int, input().split()))

for i in range(len(l)-1) :
    if l[i] + 1 == l[i+1] :
        if i == 6 :
            print("ascending")
    elif l[i] - 1 == l[i+1] :
        if i == 6 :
            print("descending")
    else :
        print("mixed")
        break