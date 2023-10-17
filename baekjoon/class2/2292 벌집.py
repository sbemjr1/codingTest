n=int(input())
i=1
x=1

while True :
    i+=6*x
    if n <= i and n >= i-6*x+1 :
        print(x+1)
        exit()
    x+=1
