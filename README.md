# Real-time-stream-video-processed-from-OpenVINO-demo-to-website(object detection & object counter)
Using SocketIo to transfer each frame processed from OpenVINO to website realtime.
In this demo, we are using object detection with yolov3 with IR model was trained with darknet.
## Required:
***OpenVINO toolkit
***Python3
***Nodejs
***IR model(.bin,.xml)
## To run:
### Setup OpenVINO environment
$source /opt/intel/openvino/bin/setupvars.sh
### Run nodejs server
$npm installl
$node node.js 
### Run python script
$python3 object_detection_demo_yolov3_async.py -d CPU -l /opt/intel/openvino/deployment_tools/inference_engine/lib/intel64/libcpu_extension_sse4.so -m <.xml> -i<.mp4>

-m: path to your xml file
-i: path to video
Open http://localhost:3000 to see it work.
nam.vh@lophocvui.edu.vn