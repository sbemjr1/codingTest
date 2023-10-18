n,m=map(int, input().split())

nums = list(map(int, input().split()))

result = []

for k in range(0,len(nums)-2) :
    for i in range(k+1,len(nums)-1) :
        for j in range(i+1,len(nums)) :
            result.append(nums[k]+nums[i]+nums[j])
            if nums[k]+nums[i]+nums[j] == m :
                print(nums[k]+nums[i]+nums[j])
                exit()

result = list(filter(lambda x:x-m<0,result))

result.sort(reverse=True)

print(result[0])