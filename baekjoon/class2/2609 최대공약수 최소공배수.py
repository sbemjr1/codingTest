nums = list(map(int, input().split()))

nums.sort()

for i in range(nums[0],0,-1) :
    if nums[0] % i == 0 and nums[1] % i == 0 :
        print(i)
        print(i*(nums[0] // i)*(nums[1] // i))
        exit()