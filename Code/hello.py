from cgitb import text
from tkinter import *
from tkinter import font
window = Tk()
def click():
    print("you clicked me!")
button = Button(window,
                text="click",
                command=click,
                font=("Arial",30,'bold'),
                )


button.pack()
window.mainloop()