N=int(input())
i=666
c=0

while True :
    if str(i).find("666") != -1 :
        c+=1
    if c==N :
        print(i)
        exit()
    i+=1
