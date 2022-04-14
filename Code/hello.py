from cgitb import text
from random import choice
from tkinter import *
from tkinter import font
import tkinter as tk
from webbrowser import get
window = Tk()
window.title('Course-Manager')
window.geometry('700x350')

#Faculty
faculty = StringVar()

f_Options=["MIK","MED", "ECO", "SCI"]
def callback(selection):faculty.set(selection)
faculty.set(f_Options[0])
faculty_label=Label(window, text='Faculty', font=('bold', 10), pady=20, padx=100)
faculty_label.grid(row=0, column=0, sticky=W)
faculty_picker=OptionMenu(window, faculty, *f_Options, command=callback)
faculty_picker.grid(row=0, column=1)




#Course

c_Options=["CSE","ELC", "ARC", "CIV"]
course = StringVar()

course_label=Label(window, text='course', font=('bold', 10), pady=20)
course_label.grid(row=0, column=0, sticky=W)
course_picker=OptionMenu(window, course, *c_Options)
course_picker.grid(row=0, column=3)




#Courses Table
course_list=Listbox(window, height=8, width=50, border=0)
course_list.grid(row=2, column=0, columnspan=3, rowspan=6, pady=20, padx=20)

label=Label(window, textvariable=faculty, font=('bold', 10), pady=20)
label.grid(row=8, column=0, sticky=W)
label=Label(window, textvariable=course, font=('bold', 10), pady=20)
label.grid(row=8, column=3, sticky=W)

window.mainloop()