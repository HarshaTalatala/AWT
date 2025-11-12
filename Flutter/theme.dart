import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: "Theme Demo",
    theme: ThemeData(primarySwatch: Colors.purple),
    home: HomePage(),
  ));
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("My Themed App")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Welcome!",
                style: TextStyle(fontSize: 24, color: Colors.purple)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              child: Text("Click Me"),
            ),
          ],
        ),
      ),
    );
  }
}
