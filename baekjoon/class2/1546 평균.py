n=int(input())
nums=list(map(int,input().split()))
result=0

nums.sort(reverse=True)

for i in range(len(nums)) :
    result += (nums[i] / nums[0])*100

print(result/n)