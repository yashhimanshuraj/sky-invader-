import cv2
import numpy

img = cv2.imread("rays.png")



print(img.shape)
height =int((img.shape[0])*0.01)
width = int((img.shape[1])*0.01)
img_resize = cv2.resize(img,(width,height))
print(img_resize.shape)

#cv2.imshow("output", img_resize)
cv2.imwrite("sunrays.png",img_resize)
cv2.waitKey(0)