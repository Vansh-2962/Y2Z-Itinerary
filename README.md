# 🧭 Y2Z Travel Itinerary Planner

**Y2Z Travel Itinerary Planner** is a sleek and interactive travel planning tool built using **React** and the powerful **@dnd-kit** library. It allows users to visually organize their trip by dragging and dropping itinerary cards in the desired order — from **Day 1 to Day Z**. Whether it's a weekend getaway or a month-long adventure, Y2Z makes planning intuitive and flexible.

## 🚀 Features

- 🗂️ Drag-and-drop itinerary cards using `@dnd-kit`
- 💡 Clean and intuitive user interface
- ⚛️ Built with React for a seamless, component-based structure

## 🛠️ Tech Stack

- **React** – Frontend framework
- **@dnd-kit/core** – Drag and drop context management
- **@dnd-kit/sortable** – Enables sortable lists
- **CSS** – Custom styling and layout

## 🔧 How it works ?

- **Step 1** : Wrap your component with <DndContext/> component. 
  ![image](https://github.com/user-attachments/assets/128cf0b4-bc50-45f3-87aa-b07c57183051)

- **Step 2** : Handling the drag end and sensors functionality properly. Sensors allows us to use the Drag and Drop functionality in the mobile mode.
   ![image](https://github.com/user-attachments/assets/e065d928-9e4f-4e11-8440-8ce8fdb392ac)

- **Step 3** : Wrap your main Card component with the <SortableContext/> component and provide the sorting strategy.
    ![image](https://github.com/user-attachments/assets/0b12883f-f417-44f2-bdf4-56c4c96f8b6d)

- **Step 4** : Inside your Card component make sure to use some important attribute, listeners and other properties as well as it is described in the code down below.
    ![image](https://github.com/user-attachments/assets/e73db897-72b6-468b-8c7a-4a8d9832926c)
    ![image](https://github.com/user-attachments/assets/84d93bba-0dcb-4573-adb6-e319119be123)

For any help, you could visit the DND kit library here
[DND kit](https://docs.dndkit.com/)


## 🧩 How Drag & Drop Works
- The app uses DndContext from @dnd-kit/core to create a draggable area.
- SortableContext wraps the itinerary cards.
- On drag end, the app updates the state using arrayMove from @dnd-kit/sortable.
