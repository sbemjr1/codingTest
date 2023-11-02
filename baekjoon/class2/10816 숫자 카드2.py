import sys
input = sys.stdin.readline

N=int(input())
NArray = list(map(int,input().split()))
Ncopy = NArray[:]

M=int(input())
MArray = list(map(int,input().split()))

Ncopy = list(set(Ncopy))

Ncopy=Ncopy.sort()

print(Ncopy)
# for num in MArray :
#     left,right = 0, len(Ncopy)
#     isExist = False

#     while left <= right :
#         mid = (left+right)//2
#         if num == Ncopy[mid] :
#             print(NArray.count(num))
#             isExist=True
#             break
#         elif num > NArray[mid] :
#             left=mid+1
#         elif num < NArray[mid] :
#             right=mid-1
#     if not isExist :
#         print(0)
    