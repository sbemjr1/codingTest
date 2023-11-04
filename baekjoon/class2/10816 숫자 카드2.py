import sys
input = sys.stdin.readline

N=int(input())
NArray = sorted(list(map(int,input().split())))
M=int(input())
MArray = list(map(int,input().split()))

def binary(n, NArray, left, right) :
    if left > right :
        return 0
    mid = (left+right)//2
    if n == NArray[mid] :
        return NArray[left:right+1].count(n)
    elif n > NArray[mid] :
        return binary(n, NArray, mid+1, right)
    else :
        return binary(n, NArray, left, mid-1)

n_dic= {}
for n in NArray :
    left = 0
    right = len(NArray) - 1
    if n not in n_dic :
        n_dic[n] = binary(n,NArray,left,right)

print(' '.join(str(n_dic[x]) if x in n_dic else '0' for x in MArray))