N=int(input())
a=[]

for _ in range(N) :
    age,name = input().split()
    a.append([int(age),name])

for i in sorted(a,key=lambda x:x[0]) :
    print(i[0],i[1])