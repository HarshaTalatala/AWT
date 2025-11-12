import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(home: FadeDemo()));
}

class FadeDemo extends StatefulWidget {
  @override
  State<FadeDemo> createState() => _FadeDemoState();
}

class _FadeDemoState extends State<FadeDemo> {
  double opacity = 1.0;

  @override
  void initState() {
    super.initState();
    _animateFade();
  }

  void _animateFade() async {
    while (mounted) {
      await Future.delayed(Duration(seconds: 1));
      setState(() => opacity = opacity == 1.0 ? 0.0 : 1.0);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Fade Animation")),
      body: Center(
        child: AnimatedOpacity(
          opacity: opacity,
          duration: Duration(seconds: 1),
          child: Container(
            width: 150,
            height: 150,
            color: Colors.blue,
            child: Center(
              child: Text("Fade", style: TextStyle(color: Colors.white, fontSize: 20)),
            ),
          ),
        ),
      ),
    );
  }
}