s=input()

for i in range(97,123) :
    if s.find(chr(i)) != -1 :
        print(s.find(chr(i)), end=" ")
    else :
        print(-1,end=" ")