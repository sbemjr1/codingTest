n,m=map(int, input().split())

nums = list(map(int, input().split()))

result = []

for i in range(1,len(nums)-1) :
    for j in range(i+1,len(nums)) :
        result.append(nums[0]+nums[i]+nums[j])
        if nums[0]+nums[i]+nums[j] == m :
            print(nums[0]+nums[i]+nums[j])
            exit()

result = list(filter(lambda x:x-m<0,result))

result.sort(reverse=True)

print(result[0])