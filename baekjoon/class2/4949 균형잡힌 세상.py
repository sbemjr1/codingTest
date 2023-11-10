# import sys
# input=sys.stdin.readline

# while True :
#     S = input().rstrip()
#     _stack=[]
#     isCorrect = True

#     if S == "." :
#         break

#     for i in range(len(S)) :
#         if S[i]=="(" or S[i] == "[" :
#             _stack.append(S[i])
#         elif len(_stack)!=0 and (_stack[-1]=="(" and S[i] ==")") :
#             _stack.pop()
#         elif len(_stack)!=0 and (_stack[-1]=="[" and S[i] =="]") :
#             _stack.pop()
#         elif len(_stack)==0 and (S[i] =="]") :
#             isCorrect=False
#         elif len(_stack)==0 and (S[i] ==")") :
#             isCorrect=False
#         else :
#             isCorrect=False
    
#     if isCorrect and len(_stack)==0:
#         print('yes')
#     else :
#         print('no')
        