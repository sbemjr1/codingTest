n=int(input())
input_arr=[]
output_arr=[]

for i in range(n) :
    input_arr.append([])
    input_arr[i]=list(map(int, input().split()))

for i in range(n) :
    c=0
    for j in range(1,input_arr[i][1]+1) :
        for k in range(1,input_arr[i][0]+1) :
            c+=1
            if c == input_arr[i][2] :
                print(str(k) + str(j).zfill(2))