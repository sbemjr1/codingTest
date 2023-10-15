n=int(input())
input_arr = list(map(int,input().split()))

input_arr.sort()

print(input_arr[0], input_arr[len(input_arr)-1])