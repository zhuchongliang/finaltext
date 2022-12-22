import face_recognition as fr
import cv2
import numpy as np
import os, base64
from flask import Flask, request, Response, render_template
app=Flask(__name__)

class face:

    def __init__(self, train_path):

        self.known_names = []
        self.known_name_encodings = []
        self.train_path = train_path

    def init(self):
        images = os.listdir(self.train_path)
        for _ in images:
            image = fr.load_image_file(self.train_path + _)
            image_path = self.train_path + _
            encoding = fr.face_encodings(image)[0]

            self.known_name_encodings.append(encoding)
            self.known_names.append(os.path.splitext(os.path.basename(image_path))[0].capitalize())

    def add(self, img_path):
        image = fr.load_image_file(img_path)
        encoding = fr.face_encodings(image)[0]
        self.known_name_encodings.append(encoding)
        self.known_names.append(os.path.splitext(os.path.basename(img_path))[0].capitalize())
        # print(self.known_names)

    def compare(self, img_path):
        image = img_path
        image = cv2.imread(image)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        face_locations = fr.face_locations(image)
        face_encodings = fr.face_encodings(image, face_locations)
        names = []

        for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
            matches = fr.compare_faces(self.known_name_encodings, face_encoding)
            name = ""

            face_distances = fr.face_distance(self.known_name_encodings, face_encoding)
            print(face_distances)
            if min(face_distances) > 0.45:
                return ["no match"]
            best_match = np.argmin(face_distances)

            if matches[best_match]:
                name = self.known_names[best_match]
                names.append(name)

            cv2.rectangle(image, (left, top), (right, bottom), (0, 0, 255), 2)
            cv2.rectangle(image, (left, bottom - 15), (right, bottom), (0, 0, 255), cv2.FILLED)
            font = cv2.FONT_HERSHEY_DUPLEX
            cv2.putText(image, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)

        print(names)
        return names
        # cv2.imshow("Result", image)
        # cv2.imwrite("./output.jpg", image)
        # cv2.waitKey(0)
        # cv2.destroyAllWindows()

@app.route('/api/register/', methods=['POST'])
def register():
    global recognition
    print(request.files)
    img = request.files.get('photo')  # 从post请求中获取图片数据
    username = request.form.get('username', '')
    suffix = '.' + img.filename.split('.')[-1]  # 获取文件后缀名
    basedir = os.path.abspath(os.path.dirname(__file__))  # 获取当前文件路径
    photo = '/train/' + username + suffix  # 拼接相对路径
    img_path = basedir + photo  # 拼接图片完整保存路径,时间戳命名文件防止重复
    img.save(img_path)  # 保存图片
    recognition.add(img_path)
    return {'msg': 'ok'}

@app.route('/api/check', methods=['POST'])
def check():
    global recognition
    src = request.data
    data = str(src).split(',')[1][:-3]
    img_data = base64.b64decode(data)
    with open("./test/temp.png", 'wb') as f:
        f.write(img_data)
    names = recognition.compare("./test/temp.png")
    return {'msg': names}


if __name__ == "__main__":
    recognition = face("./train/")
    recognition.init()
    app.run(host='127.0.0.1', port=2000)
