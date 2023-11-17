T = int(input())
    
for tc in range(1, T+1):
    n = int(input())
    
    for i in range(1,n+1) :
        if str(i).count('3') or str(i).count('6') or str(i).count('9') :
            print('-' * (str(i).count('3')+str(i).count('6')+str(i).count('9')), end=' ')
        else :
            print(i, end=' ')