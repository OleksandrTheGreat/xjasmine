# xjasmine

TestCases(
  "should generate equation",
  [
      {
          settings: null,
          expected: 1
      },
      {
          settings: {
              operationsCount: 2
          },
          expected: 2
      }
  ],
  (data) => {

      let actual = service.Create(data.settings);

      expect(actual.operations.length).toBe(data.expected);
  });
